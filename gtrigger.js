GTrigger = {
	version: 1.0,
	bindings: [],
	triggered: [],
	uids: [],
	
	trigger: function(event_name) {
		if(GTrigger.bindings.length > 0)
		{
			var i;
			for(i=0;i<GTrigger.bindings.length;i++)
			{
				if(GTrigger.bindings[i].event_name == event_name)
				{
					GTrigger.bindings[i].code();
				}
			}
		}
		
		GTrigger.triggered.push(event_name);
	},
	
	bind: function(the_event_name, onTrigger) {
		var shouldBind = true;
		
		if(GTrigger.triggered.length > 0)
		{
			var i;
			for(i=0;i<GTrigger.triggered.length;i++)
			{
				if(GTrigger.triggered[i] == the_event_name)
				{
					shouldBind = false;
					onTrigger();
				}
			}
		}
		
		if(shouldBind)
		{
			GTrigger.bindings.push({event_name: the_event_name, code: onTrigger});
		}
	},
	
	bindOnce: function(the_event_name, onTrigger, uid) {
		if(GTrigger.uids.length > 0)
		{
			var i;
			for(i=0;i<GTrigger.uids.length;i++)
			{
				if(GTrigger.uids[i] == uid)
				{
					return;
				}
			}
		}
		
		GTrigger.uids.push(uid);
		GTrigger.bind(the_event_name, onTrigger);
	}
};