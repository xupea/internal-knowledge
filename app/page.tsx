import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-14">
      <div className="topBanner">
        <div className="topBannerTitle">
          🎉&nbsp;
          <Link className="topBannerTitleText" href={`/filter/all`}>
            新知实验室 1.0 已推出!
          </Link>
          &nbsp;🥳
        </div>
      </div>
      <div className="hero_syme" data-theme="dark">
        <div className="heroInner">
          <h1 className="tagLine">
            <Image
              src={"https://docusaurus.io/img/docusaurus_keytar.svg"}
              alt=""
              width={200}
              height={200}
              className="heroLogo"
            />
            <span className="heroTitleTextHtml_zYwv">
              让 <b>学习</b> 成为 <b>习惯</b>。
            </span>
          </h1>
          <div className="indexCtas">
            <div className="primaryBtn">
              <Link href={`/filter/all`}>开始学习</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
