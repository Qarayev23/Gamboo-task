import { getSession } from "next-auth/client";
import { wrapper } from "../../store/store";

const inbox = () => {
    return (
        <h1 className="page-title">
            Inbox Page
        </h1>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async ({ req, params }) => {
        const session = await getSession({ req });
        if (!session) {
            return {
                redirect: {
                    destination: '/register',
                    permanent: false,
                },
            };
        }
    })

export default inbox