import { register } from '../router.js';
import * as core from '../../core/alerts.js';

register('alert', {
  description: 'Alert tools (list, create, delete)',
  subcommands: new Map([
    ['list', {
      description: 'List active alerts',
      handler: () => core.list(),
    }],
    ['create', {
      description: 'Create a price-crossing alert',
      options: {
        symbol: { type: 'string', short: 's', description: 'Optional: switch chart to this symbol first (e.g., NASDAQ:RKLB)' },
        price: { type: 'string', short: 'p', description: 'Price level (required)' },
        condition: { type: 'string', short: 'c', description: 'Condition: crossing (only supported)' },
        message: { type: 'string', short: 'm', description: 'Alert message' },
      },
      handler: (opts) => core.create({
        symbol: opts.symbol,
        price: opts.price,
        condition: opts.condition || 'crossing',
        message: opts.message,
      }),
    }],
    ['delete', {
      description: 'Delete alerts',
      options: {
        all: { type: 'boolean', description: 'Delete all alerts' },
      },
      handler: (opts) => core.deleteAlerts({ delete_all: opts.all }),
    }],
  ]),
});
