import { ConfigService } from "../services/config.service";

export function appInitFactory(config: ConfigService) {
    return () => config.loadConfig();
}