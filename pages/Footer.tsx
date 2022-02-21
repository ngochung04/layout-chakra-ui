import { Link, Container, Flex, Spacer } from "@chakra-ui/react";
import { Row, Col, Stack } from "react-bootstrap";
const Footer = () => {
  return (
    <footer>
      <Container bgColor={"blue.800"} maxW="100%" p={5}>
        <Row className="Link-white">
          <Col sm={2} className="d-none d-md-block mr-5">
            <img
              src="https://api.rakuten.net/static-assets/rakuten/rapidNinja.svg"
              alt="footer logo"
            />
          </Col>
          <Col>
            <div className="fs-5 text-white">Rakuten RapidAPIとは</div>
            <div>
              <Link color={"gray.400"} p="2">
                サービス概要
              </Link>
            </div>
            <div>
              <Link color={"gray.400"} p="2">
                ブログ
              </Link>
            </div>
            <div>
              <Link color={"gray.400"} p="2">
                採用情報
              </Link>
            </div>
            <div>
              <Link color={"gray.400"} p="2">
                運営チーム
              </Link>
            </div>
            <div>
              <Link color={"gray.400"} p="2">
                プレスルーム
              </Link>
            </div>
            <div>
              <Link color={"gray.400"} p="2">
                お問い合わせ
              </Link>
            </div>
          </Col>
          <Col>
            <div className="fs-5 text-white">マーケットプレイス</div>

            <div>
              <Link color={"gray.400"} p="2">
                機械学習 API
              </Link>
            </div>
            <div>
              <Link color={"gray.400"} p="2">
                SMS API
              </Link>
            </div>
            <div>
              <Link color={"gray.400"} p="2">
                Email API
              </Link>
            </div>
            <div>
              <Link color={"gray.400"} p="2">
                決済 API
              </Link>
            </div>
            <div>
              <Link color={"gray.400"} p="2">
                グルメ・レシピ API
              </Link>
            </div>
            <div>
              <Link color={"gray.400"} p="2">
                全カテゴリから 探す
              </Link>
            </div>
          </Col>
          <Col>
            <div className="fs-5 text-white">開発者の 皆様</div>
            <div>
              <Link color={"gray.400"} p="2">
                開発者にとっての 価値
              </Link>
            </div>
            <div>
              <Link color={"gray.400"} p="2">
                ドキュメント： APIの利用
              </Link>
            </div>
            <div>
              <Link color={"gray.400"} p="2">
                ダッシュボード
              </Link>
            </div>
          </Col>
          <Col>
            <div className="fs-5 text-white">APIプロバイダの 皆様</div>
            <div>
              <Link color={"gray.400"} p="2">
                APIプロバイダにとっての 価値
              </Link>
            </div>
            <div>
              <Link color={"gray.400"} p="2">
                ドキュメント： APIの 追加と 管理
              </Link>
            </div>
            <div>
              <Link color={"gray.400"} p="2">
                プロバイダダッシュボード
              </Link>
            </div>
          </Col>
        </Row>
        <hr className="bg-secondary" />
        <Row>
          <Col lg="3">
            <Link color={"gray.400"} fontSize="small">
              © 2020 R Software, Inc.,Rakuten, Inc. All rights reserved.
            </Link>
          </Col>
          <Col>
            <Flex>
              <Link color={"gray.400"} p="2" fontSize="small">
                利用規約
              </Link>
              <Link color={"gray.400"} p="2" fontSize="small">
                プライバシーポリシー
              </Link>
            </Flex>
          </Col>
          <Col>
            <Flex>
              <Link color={"gray.400"} p="2" fontSize="small">
                English
              </Link>
              <Link color={"gray.400"} p="2" fontSize="small">
                日本語
              </Link>
            </Flex>
          </Col>
          <Col></Col>
          <Col>
            <Flex>
              <Spacer />
              <img src="https://api.rakuten.net/static-assets/rakuten/facebook.svg" />
              <img src="https://api.rakuten.net/static-assets/rakuten/twitter.svg" />
              <img src="https://api.rakuten.net/static-assets/rakuten/linked-in.svg" />
            </Flex>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
