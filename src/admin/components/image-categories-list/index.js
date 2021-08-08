import React, { useEffect, useState } from "react";
import { Container } from "../../../shared/elements/layout";
import { TitleH1 } from "../../../shared/elements/title";
import { colors } from "../../../shared/theme/color";
import { size } from "../../../shared/theme/size";
import { Table } from "../../style";
import { getCall} from "../../../api/methods";

const ImageCategoryList = () => {
  const [data, setData] = useState();

  const fetchData = async () => {
    const response = await getCall("image-category");
    setData(response);
  };
  useEffect(() => {
    fetchData();
  }, []);



  return (
    <>
      <Container background={colors.bg.WHITE} padding={"20px"}>
        <TitleH1 size={size.default.ex_md} color={colors.default.BLACK}>
          Image category list
        </TitleH1>
        <Table>
          <thead>
            <tr>
              <th>name</th>
              <th>slug</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.data.imageCategories.map((item) => (
                <tr key={item._id}>
                  <td>{item.title}</td>
                  <td>{item.slug}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default ImageCategoryList;
