import Layout from "@/components/layout/Layout";
import PlaybookInsideView from "@/components/playbook/PlaybookInsideView";

export default function InsidePage() {
  return (
    <Layout
      headerStyle={3}
      footerStyle={1}
      wrapperCls="playbook-page"
      breadcrumbTitle="Playbook Library"
      description="Browse all AMKA playbook articles and download the matching industry guides."
      backgroundImage="/assets/images/backgrounds/inside-page-bg.svg"
    >
      <PlaybookInsideView />
    </Layout>
  );
}
