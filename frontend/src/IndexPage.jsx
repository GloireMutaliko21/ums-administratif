
import IndexDir from './admin/Index';
import Index from './client/Index';
const IndexPage = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div>
            {
                user.agent.privilege === 'direction' ?
                    <IndexDir /> :
                    <Index />
            }
        </div>
    );
}

export default IndexPage;