import "../../../public/styles/ClickLoader.css"
const ClickLoad = ({ text }) => {
    return (
        <div className="flex justify-center items-center">
            <p className="mr-1">{text}</p>
            <div className="loader rounded-full flex space-x-1 pt-2">
                <div className="w-1 h-1 bg-slate-200 rounded-full animate-bounce"></div>
                <div className="w-1 h-1 bg-slate-200 rounded-full animate-bounce"></div>
                <div className="w-1 h-1 bg-slate-200 rounded-full animate-bounce"></div>
            </div>
        </div>
    );
}

export default ClickLoad;