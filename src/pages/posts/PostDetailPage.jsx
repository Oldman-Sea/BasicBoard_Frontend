const PostDetailPage = () => {
  return (
    <>
      <main
        className="
        w-screen
        h-screen
        flex
        items-center
        justify-center
        "
      >
        <article
          className="
            w-[55%]
            h-[45%]
            mb-[10%]
            px-2

            border-2
          "
        >
          <header
            className="
            h-[36%]
            flex
            flex-col
            "
          >
            <h2 className="text-2xl font-semibold">
              블로그 제목
            </h2>
            <time
              datetime="2024-07-26T20:16"
              className="text-xs font-normal text-[#AAAAAA] ml-auto"
            >
              2024-07-26 20:16
            </time>
          </header>

          <section
            className="
            h-[37%]
            flex
            items-center
            border-t-2
          border-gray-300/30
            "
          >
            <p className="text-sm">
              체험단 하면서 목과 어깨가 너무 안좋아져서
              이제 살려고 당첨된거 취소할려고 하는데 취소 버튼이 안보이네요
              취소는 어디서 하면 될까요?
            </p>
          </section>

          <div className="h[27%] flex flex-col">
            <nav className="border-2 flex flex-row justify-center gap-1.5">
              <button className="flex items-center gap-0.5 bg-[#C4C5CA] rounded px-2 py-1">
                <img src="/src/assets/icons/whiteAngleBracket.svg" alt="꺽쇠" className="w-4 h-4" />
                <span className="text-white text-sm">이전글</span>
              </button>

              <button className="flex items-center gap-0.5 bg-[#19191B] rounded px-2 py-1">
                <span className="text-white text-sm">다음글</span>
                <img src="/src/assets/icons/whiteAngleBracket.svg" alt="꺽쇠" className="-scale-x-100 w-4 h-4" />
              </button>
            </nav>

            <footer className="border-2">
              <button className="">
                <img src="/src/assets/icons/brownX.svg" alt="X" />
                <span>삭제하기</span>
              </button>

              <button className="">
                <img src="/src/assets/icons/pencil.svg" alt="연필" />
                <span>수정하기</span>
              </button>
            </footer>
          </div>

        </article>
      </main>
    </>
  );
}

export default PostDetailPage;