import React, { useState, useEffect } from "react";
import { Layout, Col, Typography } from "antd";
import { getRecipes } from "../api";
import RecipeCard from "./RecipeCard";
import { useParams } from "react-router-dom";

const { Title } = Typography;
const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    getRecipes(category).then((data) => setRecipes(data));
  }, [category]);
  return (
    <Layout>
      <Title level={3}>{category.toUpperCase()}</Title>
      <Col span={24} align="center">
        {recipes && recipes.map((recipe) => <RecipeCard recipe={recipe} />)}
      </Col>
    </Layout>
  );
};

export default RecipeList;
