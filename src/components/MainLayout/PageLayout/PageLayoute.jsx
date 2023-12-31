import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { metricaPages } from "../../../pagesConfig";
import * as SC from "./PageLayoute.styled";

import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { MessageBox } from "components/MessageBox";
import { ChartGroupContainer } from "./ChartGroupContainer/ChartGroupContainer";

const PageLayoute = () => {
  const [setSubMenu] = useOutletContext();

  const [currentPage, setCurrentPage] = useState("");
  const [currentPageConfig, setCurrentPageConfig] = useState(null);
  const [chartsGroups, setChartsGroups] = useState([]);
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  console.log("currentPageConfig", currentPageConfig);
  const { page, sub, group } = useParams();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (group) {
      setCurrentPage("group");
      return;
    }
    if (sub) {
      setCurrentPage("sub");
      return;
    }
    if (page) {
      setCurrentPage("page");
      return;
    }
  }, [page, sub, group]);

  useEffect(() => {
    setSubMenu(metricaPages);
  }, [setSubMenu]);

  useEffect(() => {
    if (currentPage) {
      let data = {};
      if (page) {
        data = metricaPages.find((elem) => elem.id === page);
        if (!data) navigate("/404");
      }
      if (sub) {
        data = data.children.find((elem) => elem.id === sub);
        if (!data) navigate("/404");
      }
      if (group) {
        const res = data.children.find((elem) => elem.id === group);
        if (!res) navigate("/404");
      }

      setCurrentPageConfig(data);
    }

    return () => {
      setCurrentPageConfig(null);
    };
  }, [currentPage, group, navigate, page, sub]);

  useEffect(() => {
    if (currentPage) {
      let data = {};
      if (page) {
        data = metricaPages.find((elem) => elem.id === page);
      }
      if (sub) {
        data = data.children.find((elem) => elem.id === sub);
      }
      if (group) {
        data = data.children.find((elem) => elem.id === group);
      }
      data.chartsGroups?.length > 0
        ? setChartsGroups(data.chartsGroups)
        : setChartsGroups([]);
    }

    return () => {
      setChartsGroups([]);
    };
  }, [currentPage, group, page, sub]);

  useEffect(() => {
    if (currentPageConfig && currentPageConfig.children) {
      if (currentPage === "sub" && currentPageConfig.children.length > 0) {
        navigate(currentPageConfig.children[0].url);
      }
      if (currentPage === "group" && currentPageConfig.children.length > 0) {
        const index = currentPageConfig.children.findIndex(
          (elem) => elem.id === group
        );
        if (index < 0) return;
        setValue(index);
      }
    }
  }, [currentPage, currentPageConfig, group, navigate]);

  return (
    <SC.PageLayoutContainerStyled>
      {currentPageConfig && (
        <>
          {currentPageConfig.children && (
            <SC.PageLayoutTabsContainerStyled>
              <Box sx={{ maxWidth: "100%" }}>
                <SC.PageLayoutTabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  {currentPageConfig?.children?.map((item) => (
                    <SC.PageLayoutTab
                      key={item?.id}
                      label={item?.title}
                      onClick={() => navigate(item?.url)}
                    />
                  ))}
                </SC.PageLayoutTabs>
              </Box>
            </SC.PageLayoutTabsContainerStyled>
          )}
          {chartsGroups.length === 0 ? (
            <Box sx={{ mt: "20vh" }}>
              <MessageBox text={"Інформація опрацьовується"} />
            </Box>
          ) : (
            chartsGroups.map((item, index) => (
              <ChartGroupContainer key={index} chartGroup={item} />
            ))
          )}
          <Box
            sx={{
              height: "100%",
              width: "1px",
              // boxShadow: "0 0 10px 0 rgba(0,0,0,0.3)",
              // backgroundColor: "#1e67b0",
              position: "absolute",
              right: "-20px",
              top: "-20px",
            }}
          />
        </>
      )}
    </SC.PageLayoutContainerStyled>
  );
};

export default PageLayoute;
