import { API_URL_CHARACTERS, ApiResponse } from "@/api";
import { useEffect } from "react";
import { useFetch } from "@/shared/hooks";
import { DashboardCard } from "../DashboardCard";
import {
  Button,
  DummyWrapper,
  FallbackComponent,
  LoaderComponent,
} from "@/shared/components";
import {
  fallbackImage,
  getErrorMessage,
  scrollToTop,
} from "@/shared/utilities";
import s from "./DashboardPanel.module.css";

export const DashboardPanel = () => {
  const { data, fetchData, isLoading, error } = useFetch<ApiResponse>();

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
    fetchData(API_URL_CHARACTERS);
  }, []);

  useEffect(() => {
    if (!data) return;
    scrollToTop();
  }, [data]);

  if (isLoading)
    return (
      <DummyWrapper className={s.wrapper}>
        <LoaderComponent message="Loading..." />
      </DummyWrapper>
    );

  if (error)
    return (
      <DummyWrapper className={s.wrapper}>
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
    <section className={s.wrapper} aria-label="characters dashboard">
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

      <div className={s.container}>
        {data &&
          data.results.map((item) => (
            <DashboardCard
              key={item.id}
              id={item.id}
              name={item.name || "Unknown"}
              image={item.image || fallbackImage}
            />
          ))}
      </div>
    </section>
  );
};
