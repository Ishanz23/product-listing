# Notes

---

- Upgraded project to latest Angular
- app.module.ts is removed because requirement was standalone application. Check main.ts file for changes
- All components migrated to support ChangeDetection Strategy onPush beacuse requirement was zoneless
- Unneccesary imports removed
- All `*ngIf` and `*ngFor` statements migrated to newer control flow. Check [Control Flow](https://angular.dev/guide/templates/control-flow) for new syntax details
- Implemented Signals
- Removed subscriptions and implemented async pipe
