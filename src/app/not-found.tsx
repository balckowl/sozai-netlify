const NotFound = () => {
    const styles: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '45vh',
        fontSize: '2rem',
        textAlign: 'center',
        position: 'relative', // 相対位置を設定
        marginBottom: '0.3em', // アンダーバー分の余白を確保
    };

    const spanStyle: React.CSSProperties = {
        position: 'relative', // 相対位置を設定
        display: 'inline-block', // インラインブロック要素にすることで幅を調整できるようにする
    };

    const lineStyle: React.CSSProperties = {
        content: '""',
        position: 'absolute', // 絶対位置を設定
        left: '50%', // テキストの中央にラインを配置する
        transform: 'translateX(-50%)', // ラインを水平方向に中央揃え
        bottom: '3.2em', // ラインを下に配置
        width: '17%', // ラインの幅を調整
        height: '0.2em',
        background: 'linear-gradient(to left, #ffe0e0 25%, black 75%)', // グラデーションを使って色を切り替え
    };

    return (
        <div style={styles}>
            <span style={spanStyle}>404 Not Found</span>
            <span style={lineStyle}></span>
        </div>
    );
}

export default NotFound;