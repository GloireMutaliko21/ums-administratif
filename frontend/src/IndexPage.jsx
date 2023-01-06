
import IndexDir from './admin/Index';
import Index from './client/Index';
const IndexPage = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div>
            {
                user.privilege === 'direction' ?
                    <IndexDir /> :
                    <Index />
            }
        </div>
    );
}

export default IndexPage;