import { API_URL_CHARACTERS, ApiCharactersResponse } from "@/api";
import { useEffect } from "react";
import { useDarkMode } from "@/shared/context";
import { useFetch } from "@/shared/hooks";
import {
  Button,
  DummyWrapper,
  FallbackComponent,
} from "@/shared/components";
import {
  fallbackImage,
  getErrorMessage,
  scrollToTop,
} from "@/shared/utilities";
import { DashboardCard } from "../dashboardCard";
import clsx from "clsx";
import s from "./DashboardPanel.module.css";
import { DashboardPanelSkeleton } from "./DashboardPanelSkeleton";

export const DashboardPanel = () => {
  const { data, fetchData, isLoading, error } =
    useFetch<ApiCharactersResponse>();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const theme = isDarkMode ? s.dark : s.light;
  
  const nextPage = data?.info?.next;
  const prevPage = data?.info?.prev;

  const handleNextPage = () => {
    nextPage && fetchData(nextPage);
  };

  const handlePrevPage = () => {
    prevPage && fetchData(prevPage);
  };

  const handleReFetch = () => {
    if (error) fetchData(API_URL_CHARACTERS);
  };

  useEffect(() => {
    if (!data) return;
    scrollToTop();
  }, [data]);

  useEffect(() => {
    fetchData(API_URL_CHARACTERS);
  }, []);

  if (error)
    return (
      <DummyWrapper className={clsx(s.wrapper, theme)}>
        <FallbackComponent title="Ooops" message={getErrorMessage(error)}>
          <Button
            handleClick={handleReFetch}
            text="Refresh"
            ariaLabel="refresh"
          />
        </FallbackComponent>
      </DummyWrapper>
    );

  return (
    <div className={clsx(s.wrapper, theme)}>
      <nav className={s.nav}>
        <Button
          handleClick={handlePrevPage}
          text="PREV"
          ariaLabel="navigate to previous page"
          disabled={!prevPage}
        />
        <Button
          handleClick={handleNextPage}
          text="NEXT"
          ariaLabel="navigate to next page"
          disabled={!nextPage}
        />
        <Button
          className={s.minSize}
          handleClick={toggleDarkMode}
          text={isDarkMode ? "LIGHT" : "DARK"}
          ariaLabel={
            isDarkMode ? "change to light theme" : "change to dark theme"
          }
        />
      </nav>
      {isLoading ? (
        <DummyWrapper className={clsx(s.wrapper, theme)}>
          <DashboardPanelSkeleton className={theme} quantity={20} />
        </DummyWrapper>
      ) : (
        <section className={clsx(s.container, theme)}>
          {data?.results.length ? (
            data.results.map((item) => (
              <DashboardCard
                key={item.id}
                id={item.id}
                name={item.name || "Unknown"}
                image={item.image || fallbackImage}
              />
            ))
          ) : (
            <FallbackComponent title="No results!" />
          )}
        </section>
      )}
    </div>
  );
};
