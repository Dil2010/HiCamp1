import { Container, Row,Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';
import { useSelector } from 'react-redux';
import Error from '../components/Error';
import Loading from '../components/Loading';



const CampsiteDetailPage = () => {
    const { campsiteId } = useParams();
    const campsite = useSelector(selectCampsiteById(campsiteId));
    console.log('campsite', campsite);

    const isLoading = useSelector((state) => state.campsites.isLoading);
    const errMsg = useSelector((state) => state.campsites.errMsg);
    let content = null;

    if (isLoading) {
        content = <Loading />;
    } else if (errMsg) {
        content = <Error errMsg={errMsg} />;
    } else {
        content = (
            <>
            <Row>
                
                <CampsiteDetail campsite={campsite} />  
                <CampsiteDetail campsite={campsite} />              
                
            </Row>
            <Row>
                
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId={campsiteId} />
                
            </Row>
            <Row>
                
                <CampsiteDetail campsite={campsite} />
                <CampsiteDetail campsite={campsite} />
                <CampsiteDetail campsite={campsite} />
                

            </Row>
            </>
        );
    }

    return (
        <Container>
            {campsite && <SubHeader current={campsite.name} detail={true} />}
            <Row>{content}</Row>
            
        </Container>
    );
};

export default CampsiteDetailPage;