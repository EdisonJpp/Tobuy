import { getPublications, getPublicationById, AddPublication, getPostByCategory, deletePost } from '../../../services/PublicationService'
import * as  publications from '../../constants/publication/publicationTypes';
import { myProfile } from '../../../services/UserService';

export const publications_fetch = (): publications.PublicationTypes => {
    return {
        type: publications.RECENT_PUBLICATIONS_FETCH,
        payload: {
            data: undefined,
            loading: true,
            error: undefined,
        },
    };
};
export const publications_success = async (): Promise<publications.PublicationTypes> => {
    const response = await getPublications();
    if (response.status === 200) {
        return {
            type: publications.RECENT_PUBLICATIONS_SUCCESS,
            payload: {
                data: response.data,
                loading: false,
                error: undefined,
            },
        };
    } else {
        return {
            type: publications.RECENT_PUBLICATIONS_FAILED,
            payload: {
                data: undefined,
                loading: false,
                error: response.data,
            },
        };
    };
};
export const publicationById_fetch = (): publications.PublicationTypes => {
    return {
        type: publications.PUBLICATION_BY_ID_FETCH,
        payload: {
            data: undefined,
            loading: true,
            error: undefined,
        },
    };
};
export const publicationById_success = async (id: number): Promise<publications.PublicationTypes> => {
    const response = await getPublicationById(id);
    if (response.status === 200) {
        return {
            type: publications.PUBLICATION_BY_ID_SUCCESS,
            payload: {
                data: response.data,
                loading: false,
                error: undefined,
            },
        };
    } else {
        return {
            type: publications.PUBLICATION_BY_ID_FAILED,
            payload: {
                data: undefined,
                loading: undefined,
                error: response.data,
            },
        };
    };
};
export const addPost_fetch = (): publications.PublicationTypes => {
    return {
        type: publications.ADD_PUBLICATIONS_FETCH,
        payload: {
            data: undefined,
            loading: true,
            error: undefined,
        },
    };
};
export const addPost_success = async (photos: any[], publicationData: any): Promise<publications.PublicationTypes> => {
    const response = await AddPublication(photos, publicationData);
    if (response.status === 200) {
        return {
            type: publications.ADD_PUBLICATIONS_SUCCESS,
            payload: {
                data: response.data,
                loading: false,
                error: undefined,
            },
        };
    } else {
        return {
            type: publications.ADD_PUBLICATIONS_FAILED,
            payload: {
                data: undefined,
                loading: false,
                error: response.data,
            },
        };
    }
};
export const myPublications_fetch = (): publications.PublicationTypes => {
    return {
        type: publications.MY_PUBLICATION_FETCH,
        payload: {
            data: undefined,
            loading: true,
            error: undefined,
        },
    };
};
export const myPublications_success = async (users_id: number): Promise<publications.PublicationTypes> => {
    const response = await myProfile(users_id);
    if (response.status === 200) {
        return {
            type: publications.MY_PUBLICATION_SUCCESS,
            payload: {
                data: response.data,
                loading: false,
                error: undefined,
            },
        };
    } else {
        return {
            type: publications.MY_PUBLICATION_FAILED,
            payload: {
                data: undefined,
                loading: false,
                error: response.data,
            },
        };
    };
};
export const searchPublicationFetch = (): publications.PublicationTypes => {
    return {
        type: publications.SEARCH_PUBLICATION_FETCH,
        payload: {
            data: undefined,
            loading: true,
            error: undefined,
        },
    };
};
export const searchPublicationSuccess = async (text: string): Promise<publications.PublicationTypes> => {
    const response = await getPublications();
    if (response.status === 200) {
        const regex = new RegExp(`^${text}`, 'i');
        return {
            type: publications.SEARCH_PUBLICATION_SUCCESS,
            payload: {
                loading: false,
                data: response.data.filter((p: any, i: number) => regex.test(p.title)),
                error: undefined,
            },
        };
    } else {
        return {
            type: publications.SEARCH_PUBLICATION_FAILED,
            payload: {
                loading: false,
                data: undefined,
                error: undefined,
            },
        };
    };
};

export const postByCategory_fetch = (): publications.PublicationTypes => {
    return {
        type: publications.POST_BY_CATEGORY_FETCH,
        payload: {
            data: undefined,
            loading: true,
            error: undefined,
        },
    };
};
export const postByCategory_success = async (categoryId: number): Promise<publications.PublicationTypes> => {
    const response = await getPostByCategory(categoryId);
    if (response.status === 200) {
        return {
            type: publications.POST_BY_CATEGORY_SUCCESS,
            payload: {
                loading: false,
                data: response.data,
                error: undefined,
            },
        };
    } else {
        return {
            type: publications.POST_BY_CATEGORY_FAILED,
            payload: {
                data: undefined,
                loading: false,
                error: response.data,
            },
        };
    };
};
export const deletePost_fetch = (): publications.PublicationTypes => {
    return {
        type: publications.POST_BY_CATEGORY_FETCH,
        payload: {
            data: undefined,
            loading: true,
            error: undefined,
        },
    };
};
export const deletePost_success = async (id: number): Promise<publications.PublicationTypes> => {
    const response = await deletePost(id);
    if (response.status === 200) {
        return {
            type: publications.POST_BY_CATEGORY_SUCCESS,
            payload: {
                data: response.data,
                loading: false,
                error: undefined,
            },
        };
    } else {
        return {
            type: publications.POST_BY_CATEGORY_FAILED,
            payload: {
                data: undefined,
                loading: false,
                error: response.data,
            },
        };
    };
};


