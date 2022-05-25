import { getSession } from "next-auth/client";
import { wrapper } from "../../store/store";

const Meetings = () => {
    return (
        <h1 className="page-title">
            Meetings Page
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

export default Meetings