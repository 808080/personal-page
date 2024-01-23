import Profile from "../pages/Profile.svelte";
import BusinessProfile from "../pages/BusinessProfile.svelte";
import EInvoicing from "../pages/EInvoicing.svelte";
import PlanAndLimits from "../pages/PlanAndLimits.svelte";
import Team from "../pages/Team.svelte";
import Security from "../pages/Security.svelte";
import Notifications from "../pages/Notifications.svelte";

const routes = {
  "/security": Security,
  "/notifications": Notifications,
  "/business-profile": BusinessProfile,
  "/invoicing": EInvoicing,
  "/plans": PlanAndLimits,
  "/team": Team,
  "/": Profile,
};

export default routes;