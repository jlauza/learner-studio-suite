import { options } from "./[...nextauth]/options";
import { getServerSession } from "next-auth";

export async function getServerSideProps() {
  const session = await getServerSession(options);
  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=/server",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
