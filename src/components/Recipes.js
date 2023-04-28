import React, { useState, useEffect } from "react";
import { Row, Layout, Menu, Divider } from "antd";
import RecipeList from "./RecipeList";
import { getCategories } from "../api";
import {
  Link,
  Routes,
  Route,
  useResolvedPath,
  useLocation,
} from "react-router-dom";

const Recipes = () => {
  const [categories, setCategories] = useState([]);
  // const { path } = useMatch();
  const { path } = useResolvedPath("").pathname;
  console.log(path);
  const { pathname } = useLocation();
  useEffect(() => {
    getCategories().then((cats) => setCategories(cats));
  }, []);
  return (
    <Layout>
      <Row span={12}>
        <Menu mode="horizontal" theme="dark">
          {categories &&
            categories.map((c, i) => (
              <Menu.Item key={i}>
                <Link to={`${pathname}/${c}`}>{c.toUpperCase()}</Link>
              </Menu.Item>
            ))}
        </Menu>
      </Row>
      <Divider />
      <Row>
        <Routes>
          <Route path={`${pathname}/:category`} element={<RecipeList />} />
        </Routes>
      </Row>
    </Layout>
  );
};

export default Recipes;
