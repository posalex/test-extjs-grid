Ext.onReady(function() {
    Ext.create('Ext.data.Store', {
        storeId: 'workScheduleStore',
        fields: [
            {name: 'workplace', type: 'string'},
            {name: 'timeFrom', type: 'string'},
            {name: 'timeUntil', type: 'string'},
            {name: 'comment', type: 'string'}
        ],
        data: [
            {workplace: '12', timeFrom: '10:00', timeUntil: '19:15', comment: 'Example data'},
            {workplace: '', timeFrom: '', timeUntil: '', comment: ''}
        ]
    });

    var validWorkplaces = ["11", "12", "13", "21", "22", "23", "K1", "K2", "M1", "M2", "M3", "MK", "MM1", "AE", "EI", "HG", "RT", "US", "FR", "MK0", "MK1", "SP", "HU", "DE", "HK", "DG", "ER", "BR", "PP"];
    var workplacesThatNeedAMandatoryComment = ["K1", "K2", "AE", "MK0", "MK1", "DE"];
    var minCommentLength = 10;
    var workplacesThatNeedAPredefinedMandatoryComment = {
        MK0: ["Play Mortal Kombat", "Do not play Mortal Kombat", "Organize tournament", "Practice fatalities", "Clean gaming equipment"],
        DE: ["Dodge flying eggs", "Throw eggs at the people walking by", "Prepare egg-cellent puns", "Count unbroken eggs", "Design protective gear"],
        MK1: ["Complete project report", "Review team performance", "Brainstorm new ideas", "Update project timeline", "Conduct team building exercise"],
    };

    Ext.create('Ext.container.Viewport', {
        layout: 'fit',
        items: [{
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'grid',
                title: 'Work Schedule for a Person on a Day',
                flex: 1,
                store: Ext.data.StoreManager.lookup('workScheduleStore'),
                plugins: [
                    Ext.create('Ext.grid.plugin.CellEditing', {
                        clicksToEdit: 1
                    })
                ],
                columns: [
                    {
                        text: 'Workplace',
                        dataIndex: 'workplace',
                        flex: 1,
                        editor: {
                            xtype: 'textfield',
                            listeners: {
                                change: function(field, newValue) {
                                    field.setValue(newValue.toUpperCase());
                                }
                            }
                        }
                    },
                    {
                        text: 'Time From',
                        dataIndex: 'timeFrom',
                        flex: 1,
                        editor: {
                            xtype: 'timefield',
                            minValue: '10:00',
                            maxValue: '20:00'
                        }
                    },
                    {
                        text: 'Time Until',
                        dataIndex: 'timeUntil',
                        flex: 1,
                        editor: {
                            xtype: 'timefield',
                            minValue: '10:00',
                            maxValue: '20:00'
                        }
                    },
                    {
                        text: 'Comment',
                        dataIndex: 'comment',
                        flex: 4,
                        editor: 'textfield'
                    }
                ],
                listeners: {
                    edit: function(editor, e) {
                        var store = e.grid.getStore();
                        var lastRecord = store.getAt(store.getCount() - 1);
                        if (lastRecord.get('workplace') !== '' || lastRecord.get('timeFrom') !== '' || lastRecord.get('timeUntil') !== '' || lastRecord.get('comment') !== '') {
                            store.add({workplace: '', timeFrom: '', timeUntil: '', comment: ''});
                        }
                    }
                }
            }, {
                // you may ignore this field, it is only for the task description
                // and is not part of the task
                xtype: 'textareafield',
                flex: 3,
                fieldLabel: 'Task Description',
                labelAlign: 'top',
                value:
                    '\
This is the input mask for the personnel deployment planning of one person on one day. \n\
The user enters a valid workplace name, the start time and end time of a shift and a comment. The comment is optional or mandatory, depending on the workplace. \
The planned person can have one or more shifts in one day, e.g. 10:00-13:00, then a break and from 14:00 to 20:00. \n\n\
For the simplification there is no backend, no API, all data you need for this task is stored in variables defined in the code. \n\n\
The code uses the Classic toolkit of ExtJs 6.5.3.   \n\n\
Your task is to implement the following requirements:\n\n\
1. For workplaces ' +   workplacesThatNeedAMandatoryComment.join(', ') + ', a comment longer than ' + minCommentLength + ' characters must be entered, otherwise the field should be displayed as incorrect. \n\n\
2. In addition to the mandatory text entry for a personnel assignment at workplaces ' + 
Object.keys(workplacesThatNeedAPredefinedMandatoryComment).join(', ')
+ ', comments must be selected from a selection list with predefined texts. No free text entry for these workplaces! \n\
Depending on the workplace, either a input field with free text input or a drop-down list with predefined texts should appear. \n\n\
3. Optional: What would you change in or add to the given code?\n\n\
Predefined texts for the workplaces:\n\
'+ 
Object.keys(workplacesThatNeedAPredefinedMandatoryComment).map(function(workplace) {
    return workplace + ':\n' + workplacesThatNeedAPredefinedMandatoryComment[workplace].map(function(comment) {
        return '- "' + comment + '"';
    }).join('\n');
}).join('\n')

            }]
        }]
    });
});
