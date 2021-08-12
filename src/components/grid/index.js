import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  lazy,
  Suspense,
} from "react";
import PropTypes from "prop-types";
import SkeletonLoader from "../../shared/elements/loaders/skeleton";
import {
  Item,
  TopHovered,
  ButtomHovered,
  Meta,
  Button,
  PhotoModal,
  LikeMeta,
} from "./style";
import PhotographerCardInfo from "./photographerCardInfo";
import { useSelector, useDispatch } from "react-redux";
import { addToPocketAction } from "./../../actions/pocketActions";
import { useMutation } from "react-query";
import { allDatas } from "./../../DUMM_DATA";
import { postCall } from "../../api/methods";
import { colors } from "../../shared/theme/color";
import { Link } from "react-router-dom";
import { getUsersByIdAction } from "./../../actions/usersAction";
import { FiHeart, FiPocket, FiDownload, FiEdit } from "react-icons/fi";

const Image = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../../shared/elements/image")));
  });
});

const GridCard = (props) => {
  const isMounted = useRef(false);
  const {
    id,
    image,
    likes,
    isShownInUserDashboard,
    ownerId,
    theme,
    currentUser,
  } = props;

  const [photographerModal, setPhotographerModal] = useState(false);
  const [likesAmount, setLikesAmounts] = useState(0);
  const selectPockets = useSelector((store) => store.pocket);
  const data = useSelector((store) => store.usersById);
  const dispatch = useDispatch();
  const likeMutation = useMutation((like) => postCall(like, "image-likes"));

  useEffect(() => {
    isMounted.current = true;
    if (isMounted.current) {
      const fetchApi = async (ownerId) => {
        dispatch(getUsersByIdAction(ownerId));
      };
      setLikesAmounts(likes);
      fetchApi(ownerId);
    }
    return () => {
      isMounted.current = false;
    };
  }, [dispatch, likes, ownerId]);

  const addToPocketHandler = useCallback(() => {
    let isMounted = true;
    if (isMounted) {
      const finder = allDatas.filter((x) => x.id === id);
      const findSameSelectedPocket = selectPockets.find((x) => x.id === id);
      if (findSameSelectedPocket === undefined)
        dispatch(addToPocketAction(finder[0]));
    }
  }, [dispatch, id, selectPockets]);

  const onMouseEnterHandler = () => {
    setPhotographerModal(true);
  };

  const onMouseLeaveHandler = () => {
    setPhotographerModal(false);
  };

  const handleLikeBtn = (id) => {
    const data = {
      imageId: id,
      likesCount: likes + 1,
      userId: currentUser,
    };
    setLikesAmounts(likes + 1);
    likeMutation.mutate(data);
  };

  const pageOffsetHandler = () => window.scrollTo(0, 0);

  return (
    <>
      <Suspense fallback={<></>}>
        {data.length === 0 ? (
          <SkeletonLoader />
        ) : (
          <Item theme={theme}>
            <Link to={`/photos/${id}`} onClick={pageOffsetHandler}>
              <Image width="100%" alt={"x"} src={image} onclick={onclick} />
            </Link>
            <div>
              <TopHovered>
                <Meta color={colors.bg.WHITE} onClick={() => handleLikeBtn(id)}>
                  <LikeMeta>
                    <FiHeart size={15} /> <sup>{likesAmount}</sup>
                  </LikeMeta>
                </Meta>
                {!isShownInUserDashboard && (
                  <Meta onClick={(id) => currentUser && addToPocketHandler(id)}>
                    <FiPocket size={15} /> <sup>Add to pocket</sup>
                  </Meta>
                )}
              </TopHovered>
              <ButtomHovered>
                {!isShownInUserDashboard ? (
                  <>
                    <Meta onMouseEnter={onMouseEnterHandler}>
                      <Image
                        width="40"
                        height="40"
                        src={data.length !== 0 && data.user.profileimage}
                        alt={data.length !== 0 && data.user.username}
                        onMouseEnter={onMouseEnterHandler}
                        onMouseLeave={onMouseLeaveHandler}
                      />
                      <span>{data.length !== 0 && data.user.username}</span>
                    </Meta>
                    <Button>
                      <FiDownload size={15} />
                    </Button>
                  </>
                ) : (
                  <Button style={{ float: "left", marginLeft: "10px" }}>
                    <FiEdit size={15} />
                  </Button>
                )}
              </ButtomHovered>
            </div>
          </Item>
        )}
        {data.length !== 0 && photographerModal && (
          <PhotoModal
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
          >
            {data && (
              <>
                <Link to={`/user-profile/${ownerId}`}>
                  <Meta>
                    <img
                      width="40"
                      height="40"
                      src={data.length !== 0 && data.user.profileimage}
                      alt={data.length !== 0 && data.user.profileimage}
                    />
                    <p>
                      {data.length !== 0 && data.user.name}{" "}
                      {data.length !== 0 && data.user.lastname}
                    </p>
                    <br />
                  </Meta>
                </Link>
                <PhotographerCardInfo
                  description={data.length !== 0 && data.user.description}
                  role={data.length !== 0 && data.user.role}
                  imageCount={data.length !== 0 && data.user.totalposts}
                  likes={data.length !== 0 && data.user.totallikes}
                />
              </>
            )}
          </PhotoModal>
        )}
      </Suspense>
    </>
  );
};

GridCard.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  likes: PropTypes.number,
  isShownInUserDashboard: PropTypes.bool,
  ownerId: PropTypes.string,
  theme: PropTypes.string,
  currentUser: PropTypes.string,
};

export default GridCard;
