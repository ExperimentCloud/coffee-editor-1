/*!
 * Copyright (c) 2019-2020 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0, or the MIT License which is
 * available at https://opensource.org/licenses/MIT.
 *
 * SPDX-License-Identifier: EPL-2.0 OR MIT
 */

export const controlUnitView = {
    'type': 'VerticalLayout',
    'elements': [
        {
            'type': 'Label',
            'text': 'Control Unit'
        },
        {
            'type': 'Group',
            'label': 'Processor',
            'elements': [
                {
                    'type': 'HorizontalLayout',
                    'elements': [
                        {
                            'type': 'VerticalLayout',
                            'elements': [
                                {
                                    'type': 'Control',
                                    'label': 'Vendor',
                                    'scope': '#/properties/processor/properties/vendor'
                                },
                                {
                                    'type': 'Control',
                                    'label': 'Clock Speed',
                                    'scope': '#/properties/processor/properties/clockSpeed'
                                },
                                {
                                    'type': 'Control',
                                    'label': 'Number Of Cores',
                                    'scope': '#/properties/processor/properties/numberOfCores'
                                }
                            ]
                        },
                        {
                            'type': 'VerticalLayout',
                            'elements': [
                                {
                                    'type': 'Control',
                                    'label': 'Socketconnector Type',
                                    'scope': '#/properties/processor/properties/socketconnectorType'
                                },
                                {
                                    'type': 'Control',
                                    'label': 'Manufacturing Process',
                                    'scope': '#/properties/processor/properties/manufactoringProcess'
                                },
                                {
                                    'type': 'Control',
                                    'label': 'Thermal Design Power',
                                    'scope': '#/properties/processor/properties/thermalDesignPower'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            'type': 'Group',
            'label': 'Display',
            'elements': [
                {
                    'type': 'HorizontalLayout',
                    'elements': [
                        {
                            'type': 'Control',
                            'label': 'Width',
                            'scope': '#/properties/display/properties/width'
                        },
                        {
                            'type': 'Control',
                            'label': 'Height',
                            'scope': '#/properties/display/properties/height'
                        }
                    ]
                }
            ]
        },
        {
            'type': 'Group',
            'label': 'Dimension',
            'elements': [
                {
                    'type': 'HorizontalLayout',
                    'elements': [
                        {
                            'type': 'Control',
                            'label': 'Width',
                            'scope': '#/properties/dimension/properties/width'
                        },
                        {
                            'type': 'Control',
                            'label': 'Height',
                            'scope': '#/properties/dimension/properties/height'
                        },
                        {
                            'type': 'Control',
                            'label': 'Length',
                            'scope': '#/properties/dimension/properties/length'
                        }
                    ]
                }
            ]
        },
        {
            'type': 'Control',
            'label': 'Ram',
            'scope': '#/properties/ram'
        },
        {
            'type': 'Group',
            'label': 'User Description',
            'elements': [
                {
                    'type': 'Control',
                    'label': 'User Description',
                    'scope': '#/properties/userDescription'
                }
            ]
        }
    ]
};

export const machineView = {
    'type': 'VerticalLayout',
    'elements': [
        {
            'type': 'Label',
            'text': 'Machine'
        },
        {
            'type': 'Control',
            'label': 'Name',
            'scope': '#/properties/name'
        }
    ]
};

export const brewingView = {
    'type': 'Label',
    'text': 'Brewing Unit'
};
export const dipTrayView = {
    'type': 'Label',
    'text': 'Dip Tray'
};

export const waterTankView = {
    'type': 'Label',
    'text': 'Water Tank'
};
export const flowView = {
    'type': 'Label',
    'text': 'Flow'
};
export const weightedFlowView = {
    'type': 'VerticalLayout',
    'elements': [
        {
            'type': 'Label',
            'text': 'Weighted Flow'
        },
        {
            'type': 'Control',
            'scope': '#/properties/probability',
            'options': { focus: true }
        }
    ]
};
export const mergeView = {
    'type': 'Label',
    'text': 'Merge'
};
export const decisionView = {
    'type': 'Label',
    'text': 'Decision'
};

export const manualTaskView = {
    'type': 'VerticalLayout',
    'elements': [
        {
            'type': 'Label',
            'text': 'Manual Task'
        },
        {
            'type': 'Control',
            'label': 'Name',
            'scope': '#/properties/name',
            'options': { focus: true }
        },
        {
            'type': 'Control',
            'label': 'Duration',
            'scope': '#/properties/duration'
        },
        {
            'type': 'Control',
            'label': 'Actor',
            'scope': '#/properties/actor'
        }
    ]
};

export const testTaskView = {
    'type': 'VerticalLayout',
    'elements': [
        {
            'type': 'Label',
            'text': 'Test Task'
        },
        {
            'type': 'Control',
            'label': 'Name',
            'scope': '#/properties/name',
            'options': { focus: true }
        },
        {
            'type': 'Control',
            'label': 'Duration',
            'scope': '#/properties/duration'
        },
        {
            'type': 'Control',
            'label': 'Actor',
            'scope': '#/properties/actor'
        }
    ]
};

export const automaticTaskView = {
    'type': 'VerticalLayout',
    'elements': [
        {
            'type': 'Label',
            'text': 'Automatic Task'
        },
        {
            'type': 'Control',
            'label': 'Name',
            'scope': '#/properties/name',
            'options': { focus: true }
        },
        {
            'type': 'Control',
            'label': 'Duration',
            'scope': '#/properties/duration'
        }
    ]
};

export const workflowView = {
    'type': 'VerticalLayout',
    'elements': [
        {
            'type': 'Label',
            'text': 'Workflow'
        },
        {
            'type': 'Control',
            'label': 'Name',
            'scope': '#/properties/name',
            'options': { focus: true }
        }
    ]
};

export const coffeeSchema = {
    'definitions': {
        'component': {
            '$id': '#component',
            'title': 'Component',
            'properties': {
                'eClass': {
                    'const': 'http://www.eclipsesource.com/modelserver/example/coffeemodel#//Component'
                },
                'workflows': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/workflow'
                    }
                }
            },
            'additionalProperties': false
        },
        'machine': {
            '$id': '#machine',
            'title': 'Machine',
            'properties': {
                'eClass': {
                    'const': 'http://www.eclipsesource.com/modelserver/example/coffeemodel#//Machine'
                },
                'name': {
                    'type': 'string'
                },
                'workflows': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/workflow'
                    }
                }
            },
            'additionalProperties': false
        },
        'controlunit': {
            '$id': '#controlunit',
            'title': 'Control Unit',
            'type': 'object',
            'properties': {
                'eClass': {
                    'const': 'http://www.eclipsesource.com/modelserver/example/coffeemodel#//ControlUnit'
                },
                'processor': {
                    '$ref': '#/definitions/processor'
                },
                'dimension': {
                    '$ref': '#/definitions/dimension'
                },
                'ram': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/ram'
                    }
                },
                'display': {
                    '$ref': '#/definitions/display'
                },
                'userDescription': {
                    'type': 'string'
                }
            },
            'additionalProperties': false,
            'required': [
                'processor',
                'dimension',
                'ram'
            ]
        },
        'brewingunit': {
            '$id': '#brewingunit',
            'title': 'Brewing Unit',
            'properties': {
                'eClass': {
                    'const': 'http://www.eclipsesource.com/modelserver/example/coffeemodel#//BrewingUnit'
                }
            },
            'additionalProperties': false
        },
        'diptray': {
            '$id': '#diptray',
            'title': 'Dip Tray',
            'properties': {
                'eClass': {
                    'const': 'http://www.eclipsesource.com/modelserver/example/coffeemodel#//DipTray'
                }
            },
            'additionalProperties': false
        },
        'watertank': {
            '$id': '#watertank',
            'title': 'Water Tank',
            'properties': {
                'eClass': {
                    'const': 'http://www.eclipsesource.com/modelserver/example/coffeemodel#//WaterTank'
                }
            },
            'additionalProperties': false
        },
        'processor': {
            '$id': '#processor',
            'type': 'object',
            'title': 'Processor',
            'properties': {
                'eClass': {
                    'const': 'http://www.eclipsesource.com/modelserver/example/coffeemodel#//Processor'
                },
                'vendor': {
                    'type': 'string'
                },
                'clockSpeed': {
                    'type': 'integer'
                },
                'numberOfCores': {
                    'type': 'integer'
                },
                'socketconnectorType': {
                    'type': 'string',
                    'enum': [
                        'A1T',
                        'Z51'
                    ]
                },
                'thermalDesignPower': {
                    'type': 'integer'
                },
                'manufactoringProcess': {
                    'type': 'string',
                    'enum': [
                        '18nm',
                        'nm25'
                    ]
                }
            },
            'additionalProperties': false
        },
        'dimension': {
            '$id': '#dimension',
            'title': 'Dimension',
            'type': 'object',
            'properties': {
                'eClass': {
                    'const': 'http://www.eclipsesource.com/modelserver/example/coffeemodel#//Dimension'
                },
                'width': {
                    'type': 'integer'
                },
                'height': {
                    'type': 'integer'
                },
                'length': {
                    'type': 'integer'
                }
            },
            'additionalProperties': false
        },
        'ram': {
            '$id': '#ram',
            'title': 'RAM',
            'type': 'object',
            'properties': {
                'eClass': {
                    'const': 'http://www.eclipsesource.com/modelserver/example/coffeemodel#//RAM'
                },
                'clockSpeed': {
                    'type': 'integer'
                },
                'size': {
                    'type': 'integer'
                },
                'type': {
                    'type': 'string',
                    'enum': [
                        'SODIMM',
                        'SIDIMM'
                    ]
                }
            },
            'additionalProperties': false
        },
        'display': {
            '$id': '#display',
            'type': 'object',
            'title': 'Display',
            'properties': {
                'eClass': {
                    'const': 'http://www.eclipsesource.com/modelserver/example/coffeemodel#//Display'
                },
                'width': {
                    'type': 'integer'
                },
                'height': {
                    'type': 'integer'
                }
            },
            'additionalProperties': false
        },
        'workflow': {
            '$id': '#workflow',
            'title': 'Workflow',
            'properties': {
                'eClass': {
                    'const': 'http://www.eclipsesource.com/modelserver/example/coffeemodel#//Workflow'
                },
                'name': { 'type': 'string' },
                'nodes': {
                    'type': 'array',
                    'items': {
                        'anyOf': [
                            { '$ref': '#/definitions/automatictask' },
                            { '$ref': '#/definitions/manualtask' },
                            { '$ref': '#/definitions/testtask' },
                            { '$ref': '#/definitions/fork' },
                            { '$ref': '#/definitions/join' },
                            { '$ref': '#/definitions/decision' },
                            { '$ref': '#/definitions/merge' }
                        ]
                    }
                },
                'flows': {
                    'type': 'array',
                    'items': {
                        'anyOf': [
                            { '$ref': '#/definitions/flow' },
                            { '$ref': '#/definitions/weightedflow' }
                        ]
                    }
                }
            },
            'additionalProperties': false
        },
        'node': {
            '$id': '#node',
            'type': 'object',
            'title': 'Node',
            'properties': {
                'eClass': {
                    'const': 'http://www.eclipsesource.com/modelserver/example/coffeemodel#//Node'
                }
            },
            'additionalProperties': false
        },
        'task': {
            '$id': '#task',
            'title': 'Task',
            'type': 'object',
            'properties': {
                'eClass': {
                    'const': 'http://www.eclipsesource.com/modelserver/example/coffeemodel#//Task'
                },
                'name': {
                    'type': 'string'
                },
                'duration': {
                    'type': 'integer'
                }
            },
            'additionalProperties': false
        },
        'automatictask': {
            '$id': '#automatictask',
            'title': 'Automatic Task',
            'type': 'object',
            'properties': {
                'eClass': {
                    'const': 'http://www.eclipsesource.com/modelserver/example/coffeemodel#//AutomaticTask'
                },
                'name': {
                    'type': 'string'
                },
                'duration': {
                    'type': 'integer'
                }
                // missing component link
            }
            // 'additionalProperties': false
        },
        'manualtask': {
            '$id': '#manualtask',
            'title': 'Manual Task',
            'type': 'object',
            'properties': {
                'eClass': {
                    'const': 'http://www.eclipsesource.com/modelserver/example/coffeemodel#//ManualTask'
                },
                'name': {
                    'type': 'string'
                },
                'duration': {
                    'type': 'integer'
                },
                'actor': {
                    'type': 'string'
                }
            },
            'additionalProperties': false
        },
        'testtask': {
            '$id': '#testtask',
            'title': 'Test Task',
            'type': 'object',
            'properties': {
                'eClass': {
                    'const': 'http://www.eclipsesource.com/modelserver/example/coffeemodel#//TestTask'
                },
                'name': {
                    'type': 'string'
                },
                'duration': {
                    'type': 'integer'
                },
                'actor': {
                    'type': 'string'
                }
            },
            'additionalProperties': false
        },
        'fork': {
            '$id': '#fork',
            'title': 'Fork',
            'type': 'object',
            'properties': {
                'eClass': {
                    'const': 'http://www.eclipsesource.com/modelserver/example/coffeemodel#//Fork'
                }
            },
            'additionalProperties': false
        },
        'join': {
            '$id': '#join',
            'title': 'Join',
            'type': 'object',
            'properties': {
                'eClass': {
                    'const': 'http://www.eclipsesource.com/modelserver/example/coffeemodel#//Join'
                }
            },
            'additionalProperties': false
        },
        'decision': {
            '$id': '#decision',
            'title': 'Decision',
            'type': 'object',
            'properties': {
                'eClass': {
                    'const': 'http://www.eclipsesource.com/modelserver/example/coffeemodel#//Decision'
                }
            },
            'additionalProperties': false
        },
        'merge': {
            '$id': '#merge',
            'title': 'Merge',
            'type': 'object',
            'properties': {
                'eClass': {
                    'const': 'http://www.eclipsesource.com/modelserver/example/coffeemodel#//Merge'
                }
            },
            'additionalProperties': false
        },
        'flow': {
            '$id': '#flow',
            'title': 'Flow',
            'type': 'object',
            'properties': {
                'eClass': {
                    'const': 'http://www.eclipsesource.com/modelserver/example/coffeemodel#//Flow'
                }
                // Missing Source and Target
            }
            // 'additionalProperties': false
        },
        'weightedflow': {
            '$id': '#weightedflow',
            'title': 'Weighted Flow',
            'type': 'object',
            'properties': {
                'eClass': {
                    'const': 'http://www.eclipsesource.com/modelserver/example/coffeemodel#//WeightedFlow'
                },
                'probability': {
                    'type': 'string',
                    'enum': [
                        'low',
                        'medium',
                        'high'
                    ]
                }
                // Missing Source and Target
            }
            // 'additionalProperties': false
        }
    },
    '$ref': '#/definitions/machine'
};
