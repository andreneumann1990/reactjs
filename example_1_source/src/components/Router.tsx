import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import PageNotFoundComponent from './PageNotFound'
import HomeComponent from './Home'
import LayoutComponent from './Layout'

function RouterComponent() {
    return (<>
        <BrowserRouter>
            <Routes>
                {/* the main path does not work with gh-pages?? */}
                {/* <Route path="/ReactJS/example_1/" element={<LayoutComponent />}> */}
                {/* <Route index element={<Navigate to="/home" />} /> */}
                {/* <Route path="home" element={<HomeComponent />} /> */}
                {/* <Route path="home#" element={<HomeComponent />} /> */}
                {/* <Route path="react_exercise" element={<ReactExercise />} /> */}
                {/* <Route path=":fileExtension/:fileName/" element={<FileContent />} /> */}
                {/* <Route path="*" element={<Navigate to="/home" />} /> */}
                {/* <Route path="*" element={<PageNotFoundComponent />} /> */}
                {/* </Route> */}
                <Route path="/ReactJS/example_1/" element={<LayoutComponent />}>
                    <Route path="*" element={<Navigate to="/ReactJS/example_1/home" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>)
}

export default RouterComponent