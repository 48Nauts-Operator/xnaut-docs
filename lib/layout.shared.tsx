import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 22,
              height: 22,
              borderRadius: 5,
              background: '#F5B840',
              color: '#16130A',
              fontFamily: 'ui-monospace, monospace',
              fontSize: 10,
              fontWeight: 700,
            }}
          >
            xN
          </span>
          <span style={{ fontWeight: 600 }}>{appName}</span>
        </>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
