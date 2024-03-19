import React from 'react'
import { useLocation } from 'react-router-dom';
import { Slash } from "lucide-react";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((item) => item !== "");
  return (
    <Breadcrumb className="mx-0">
      <BreadcrumbList>

        {pathnames.map((pathname, idx) => {
            const url = `/${pathnames.slice(0, idx + 1).join("/")}`;
            if (pathname === "dashboard") return null;
          return (
            <>
              <BreadcrumbItem key={idx}>
                {idx === pathnames.length - 1 ? (
                  <BreadcrumbPage className="capitalize">{pathname}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={url} className="capitalize">
                    {pathname}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {idx < pathnames.length - 1 && (
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
              )}
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default Breadcrumbs