import { getSession } from "next-auth/client";
import { wrapper } from "../../store/store";

const Standups = () => {
    return (
        <h1 className="page-title">
            Standups Page
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

export default Standups