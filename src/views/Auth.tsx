import { useEffect, useState } from 'react';
import InvitationApi, { IInvitation } from '../api/invitation';
import { NotFound } from './NotFound';
import { useNavigate, useParams } from 'react-router-dom';


const useAuth = () => {
    const navigate = useNavigate();
    let { slug } = useParams();
    const [loading, setLoading] = useState(true);
    const [found, setFound] = useState(false);
    const [data, setData] = useState<IInvitation>({
        name: "",
        status: false,
        location: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        slug: "",
        checkInTime: new Date(),
    });
    const getDetailInvitation = async () => {
        try {
            if (!slug) {
                throw new Error('Slug is required');
            }
            setLoading(true);
            const response = await InvitationApi.detail(slug);
            if (response) {
                setFound(true);
                setData(response.data);
            } else {
                navigate('/not-found');
            }
        } catch (error) {
            navigate('/not-found');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getDetailInvitation();
    }, []);

    return { loading, found, data };
}

export default useAuth