import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    // 환경 변수 검증 (둘 중 하나라도 없으면 500 상태 및 지정된 메시지 반환)
    if (!apiKey || !contactEmail) {
      return new Response("버셀(또는 .env)에 RESEND_API_KEY · CONTACT_EMAIL 이 있는지 확인하세요", {
        status: 500,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      });
    }

    // 파일 상단이 아닌 보내기 함수 내부에서 인스턴스 생성
    const resend = new Resend(apiKey);

    const body = await req.json().catch(() => ({}));
    const { name, message } = body;

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: contactEmail,
      subject: name ? `[연락하기] ${name}님의 메시지` : "[연락하기] 새로운 문의가 도착했습니다",
      text: `이름: ${name || "(미작성)"}\n\n하고 싶은 말:\n${message || "(내용 없음)"}`,
    });

    if (error) {
      return new Response(error.message, {
        status: 400,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      });
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "서버 오류가 발생했습니다.";
    return new Response(errorMessage, {
      status: 500,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
}
