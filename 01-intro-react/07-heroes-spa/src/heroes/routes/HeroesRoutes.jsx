import { Navbar } from '../../ui';
import { Route, Routes, Navigate } from 'react-router-dom';
import { DcPage, MarvelPage } from '../pages';
export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />

                {/*faltan mas componentes search, hero by id */}
                <Route path="/" element={<Navigate to="/marvel" />} />
            </Routes>

        </>
    )
}
