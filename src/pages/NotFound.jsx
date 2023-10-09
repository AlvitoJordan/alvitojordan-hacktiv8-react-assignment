import { useNavigate } from "react-router-dom";

function NotFound(){
    const navigate = useNavigate();

    return(
        <div className="notFound">
            <div class="header">
                <h2>404 (NOT FOUND)</h2>
            </div>
            <main>
                Halaman Tidak Ditemukan
            </main>
            <br />
            <br />
            <button onClick={() => navigate("/")}>Kembali ke Halaman Utama</button>
        </div>
    )
}

export default NotFound;