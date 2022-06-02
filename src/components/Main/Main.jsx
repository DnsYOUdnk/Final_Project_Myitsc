import { Routes, Route } from "react-router-dom";
import { PageCartoons } from "../Pages/PageCartoons/PageCartoons";
import { PageEmpty } from "../Pages/PageEmpty/PageEmpty";
import { Home } from "../Pages/PageHome/Home";
import { PageMediaContent } from "../Pages/GetPagesMedia/PageMediaCotent/PageMediaContent";
import { PageMovie } from "../Pages/PageMovie/PageMovie";
import { PageSerials } from "../Pages/PageSerials/PageSerials";
import { WrapperScroll } from "../../utils/scrollToTop";
import { PageLikeList } from "../Pages/PageLikedList/PageLikeList";

export const Main = () => {
    return (
        <main className="main">
            <WrapperScroll>
                <Routes>
                    <Route path="/" element={ < Home /> } />
                    <Route path="/games" element={ < Home /> } />
                    <Route path="/movie" element={ < PageMovie /> } />
                    <Route path="/serials" element={ < PageSerials /> } />
                    <Route path="/cartoons" element={ < PageCartoons /> } />
                    <Route path=":page/media/:id/:title" element={ < PageMediaContent /> } />
                    <Route path="/list-of-liked" element={ < PageLikeList /> } />
                    <Route path="*" element={< PageEmpty />} />
                </Routes>
            </WrapperScroll>
        </main>
    )
}