import React from "react";
import Image from "./../../../shared/elements/image";
import {
  Body,
  Card,
  CardInfo,
  CardContent,
  Username,
  CardHeader,
  Metas,
  Content,
} from "./style";
import { Col, Row } from "./../../../shared/elements/layout";
import useGet from "./../../../queries/useGet";

const BlogComments = ({ blogSlug, theme }) => {
  const { data } = useGet(`http://localhost:5000/comments/${blogSlug}`);

  return (
    <>
      {data &&
        data.data.response.map((item) => (
          <Body
            theme={theme}
            key={item._id}
            background={item.isRelied && "#fbfbfb"}
          >
            <Card>
              <Row justify="space-between" wrap="no-wrap">
                <CardInfo>
                  <Col>
                    <Image
                      src={item.profileimage}
                      width="50"
                      height="50"
                      radius="50%"
                      padding="3"
                      border="1px solid #ccc"
                    />
                  </Col>
                </CardInfo>
                <CardContent>
                  <CardHeader>
                    <Row align="true" justify="space-between">
                      <>
                        <div>
                          <Row>
                            <Metas>
                              <Username>
                                {item.name} {item.lastname}
                              </Username>
                            </Metas>
                          </Row>
                        </div>
                        <Metas>{item.creationDate}</Metas>
                      </>
                    </Row>
                  </CardHeader>
                  <Content>{item.content}</Content>
                </CardContent>
              </Row>
            </Card>
          </Body>
        ))}
    </>
  );
};

export default BlogComments;
