import { environment } from '../../../environments/environment';

const getHash = (str: string) => {
  let hash = 0;

  for (let i = 0; i < str.length; i += 1) {
    const chr = str.charCodeAt(i);
    // eslint-disable-next-line no-bitwise
    hash = (hash << 5) - hash + chr;
    // eslint-disable-next-line no-bitwise
    hash |= 0; // eslint-disable-next-line no-bitwise
  }
  return hash;
};

const ecCreateLogger = (namespace: string): ((args: unknown) => void) => {
  const ENABLED_LOGS: string[] = environment.enabledNamespaces;

  const acceptableNss: string[] = [
    ...namespace
      .split(':')
      .map((el, i, all) => [...all.slice(0, i), '*'].join(':')),
    namespace,
  ];

  if (ENABLED_LOGS.find((eNs) => acceptableNss.includes(eNs))) {
    const background = Math.abs(getHash(namespace))
      .toString(16)
      .padStart(6, '0')
      .slice(0, 6)
      .split('')
      .map((c) => Number(Math.floor(parseInt(c, 16) / 1.25)).toString(16))
      .join('');

    return console.log.bind(
      console,
      `%c ${namespace} `,
      `background: #${background}; color: white; line-height: 2;`
    );
  }
  return () => undefined;
};

export { ecCreateLogger };
