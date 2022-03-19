const UnlockIcon = () => (
    <div style={{
        width: '32px',
        height: '32px',
        backgroundColor: '#77BEF8',
        borderRadius: '50%',
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="16" width="16" fill="#FFF">

            <path d="M352 192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H288V144C288 64.47 352.5 0 432 0C511.5 0 576 64.47 576 144V192C576 209.7 561.7 224 544 224C526.3 224 512 209.7 512 192V144C512 99.82 476.2 64 432 64C387.8 64 352 99.82 352 144V192z"/>
        </svg>
    </div>
);
export default UnlockIcon;
/*const UnlockIcon = ({height}) => (
    <div style={{
        marginTop: '-2.5px',
        width: '25px',
        height: '25px',
        backgroundColor: '#F2F2F2',
        padding: '5px',
        borderRadius: '50%',
        display:"flex",
        alignItems:"center",
        justifyContent:"center"}}>
    </div>
);
export default UnlockIcon;*/