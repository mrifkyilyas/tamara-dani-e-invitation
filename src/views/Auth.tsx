import { useEffect, useState } from 'react';
import InvitationApi, { IInvitation } from '../api/invitation';
import { useNavigate, useParams } from 'react-router-dom';
import MessageBoxApi from '../api/message-box';

const capitalize = (s: string) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

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
    const [isHaveSubmitMessage, setIsHaveSubmitMessage] = useState(false);
    const getDetailInvitation = async () => {
        try {
            if (!slug) {
                throw new Error('Slug is required');
            }
            setLoading(true);
            const response = await InvitationApi.detail(slug);
            if (response) {
                setFound(true);
                response.data.name = response.data.name.split(" ").map((word: string) => capitalize(word)).join(" ")
                setData(response.data);
                getIsHaveSubmitMessage(response.data.slug);
            } else {
                navigate('/not-found');
            }
        } catch (error) {
            navigate('/not-found');
        } finally {
            setLoading(false);
        }
    }

    const getIsHaveSubmitMessage = async (slug: string) => {
        try {
            if (!slug) {
                throw new Error('Slug is required');
            }
            const response = await MessageBoxApi.isHaveMessageBox(slug);
            if (response) {
                console.log(response.data, 'woooyyy');
                setIsHaveSubmitMessage(response.data.isHaveMessage);
                console.log(isHaveSubmitMessage, 'isHaveSubmitMessage');
            }
        } catch (error) {
           throw new Error("Error get is have submit message");
        }
    }


    useEffect(() => {
        getDetailInvitation();
    }, []);

    return { loading, found, data, isHaveSubmitMessage, setIsHaveSubmitMessage };
}

export default useAuth