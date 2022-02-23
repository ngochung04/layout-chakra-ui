import Question from "../../../components/Detail/TabFive/Question";
import { useDisclosure } from "@chakra-ui/react";
const Questions = () => {
  const questions = [
    {
      question: "利用料金の請求日はいつですか？",
      answer:
        "APIプランへのサブスクリプションが登録されるとお客様のクレジットカードに請求が行われます。翌月以降も同じ周期ごとに請求されます。",
    },
    {
      question:
        "なぜフリーミアムAPIを使用する際にクレジットカード情報を入力する必要があるのですか？",
      answer:
        "フリーミアムプランの割当量を超過して利用され、超過料金が発生した場合に備えて、クレジットカード情報をご入力いただいています。登録中のAPIの使用を停止したい場合は、ダッシュボードの「Billing（お支払い情報）」ページから「unsubscribe（登録を解除する）」ボタンをクリックして、プランへのサブスクリプションを解除してください。",
    },
    {
      question: "プラン割当量の上限に達した場合はどうなりますか？",
      answer:
        "超過料金が発生するかご利用が一時的に停止となります。お申込みのプランによって異なりますので予めご確認ください。",
    },
    {
      question: "支払い情報は安全でしょうか？",
      answer:
        "お客様のクレジットカード情報は、グローバルなセキュリティ基準であるPCI DSS（Payment Card Industry Data Security Standard）のもと、当社提携銀行に送信され安全に処理されます。",
    },
    {
      question: "返金は可能ですか？",
      answer:
        "返金へのご対応につきましてはsupport-rakuten-rapidapi@mail.rakuten.comまでお問い合わせください",
    },
  ];
  return (
    <>
      {questions.map((item, index) => (
        <Question item={item} key={index} />
      ))}
    </>
  );
};

export default Questions;
