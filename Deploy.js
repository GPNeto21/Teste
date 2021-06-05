baremetal node deploy <node> \
    --deploy-steps '[{"interface": "bios", "step": "apply_configuration", "args": {"settings": [{"name": "LogicalProc", "value": "Enabled"}]}, "priority": 150}]'