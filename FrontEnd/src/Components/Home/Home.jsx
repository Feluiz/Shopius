import ServiceBar from './ServiceBar/ServiceBar';

const Home = (data) => {
    const selectTab = data.props;

    return (
        <>
            <ServiceBar onClickedTab={selectTab}/>
        </>
    )
};

export default Home;