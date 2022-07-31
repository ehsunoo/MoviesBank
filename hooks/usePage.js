import { useRouter } from "next/router";

export const usePage = (page) => {
  const router = useRouter();
  const currentPage = parseInt(page);
  const currentPath = router.asPath;
  const lastPath = currentPath.substring(0, currentPath.lastIndexOf("/") + 1);
  const previousPage = currentPage > 1 ? currentPage - 1 : currentPage;
  const nextPage = currentPage + 1;
  const previousPagePath = `${lastPath}${previousPage}`;
  const nextPagePath = `${lastPath}${nextPage}`;

  return [previousPagePath, nextPagePath]
};
