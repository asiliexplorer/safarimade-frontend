import { redirect } from "next/navigation";
import { mockPackages } from "../../../lib/mockData";
import { slugifyPackageName } from "../../../lib/packageSlug";

export default async function PackageByIdRedirect({ params }) {
  const resolvedParams = await params;
  const packageId = Number(resolvedParams?.id);
  const pkg = mockPackages.find((item) => item.id === packageId);

  if (!pkg) {
    redirect("/affordable-safari-tour-packages");
  }

  redirect(`/affordable-safari-tour-packages/${slugifyPackageName(pkg.name)}`);
}