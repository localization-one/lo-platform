const loadAuth = () => import('./auth').then((m) => m.AuthModule);

const loadPlatform = () => import('./platform').then((m) => m.PlatformModule);

const loadProjects = () => import('./projects').then((m) => m.ProjectsModule);

const loadProfile = () => import('./profile').then((m) => m.ProfileModule);

export { loadAuth, loadPlatform, loadProjects, loadProfile };
