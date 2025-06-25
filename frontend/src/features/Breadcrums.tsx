import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { formatSegment } from "@/util/formatUtils";
import React from "react";
import { Link, useLocation } from "react-router";

const Breadcrums = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb  >
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/" className="text-gray-breadcrumb text-base hover:underline hover:text-gray-breadcrumb">
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathnames.map((segment, index) => {
          const to = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          return (
            <React.Fragment key={to}>
              <BreadcrumbSeparator className="text-gray-breadcrumb" />
              <BreadcrumbItem className="text-success text-base">
                {isLast ? (
                  formatSegment(segment)
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={to} className="text-gray-breadcrumb hover:underline hover:text-gray-breadcrumb">
                      {formatSegment(segment)}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrums;
