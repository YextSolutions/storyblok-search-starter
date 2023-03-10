import { useSearchActions } from "@yext/search-headless-react";
import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

export const usePageSetupEffect = (verticalKey?: string) => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const searchActions = useSearchActions();

  useEffect(() => {
    searchActions.setQuery(searchParams.get("query") || "");
    debugger;

    if (verticalKey) {
      searchActions.setVertical(verticalKey);
      searchActions.executeVerticalQuery();
    } else {
      searchActions.setUniversal();
      searchActions.executeUniversalQuery();
    }
  }, [location, searchActions]);
};
