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
import { fallbackImage } from "@/shared/utilities";
import s from "./DashboardPanel.module.css";

export const DashboardPanel = () => {
  const { data, fetchData, isLoading, isError } = useFetch<ApiResponse>();

  const nextPage = data?.info?.next;
  const prevPage = data?.info?.prev;

  const handleNextPage = () => {
    nextPage && fetchData(nextPage);
  };

  const handlePrevPage = () => {
    prevPage && fetchData(prevPage);
  };

  useEffect(() => {
    fetchData(API_URL_CHARACTERS);
  }, []);

  if (isLoading)
    return (
      <DummyWrapper className={s.wrapper}>
        <LoaderComponent message="Loading..." />
      </DummyWrapper>
    );

  if (isError)
    return (
      <DummyWrapper className={s.wrapper}>
        <FallbackComponent message="Error loading dashboard" />
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
