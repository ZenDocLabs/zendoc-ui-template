import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "../AppLayout";
import { Documentation } from "../doc/Documentation";

const Router = (): React.JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index path=":filename?/:functionName" element={<Documentation />} />
            </Route>
        </Routes>
    );
};

export default Router;
