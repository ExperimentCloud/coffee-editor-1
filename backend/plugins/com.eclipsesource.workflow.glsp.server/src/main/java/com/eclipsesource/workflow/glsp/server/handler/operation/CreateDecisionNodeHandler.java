/*******************************************************************************
 * Copyright (c) 2019-2020 EclipseSource and others.
 * 
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * https://www.eclipse.org/legal/epl-2.0, or the MIT License which is
 * available at https://opensource.org/licenses/MIT.
 * 
 * SPDX-License-Identifier: EPL-2.0 OR MIT
 ******************************************************************************/
package com.eclipsesource.workflow.glsp.server.handler.operation;

import org.eclipse.emfcloud.modelserver.coffee.model.coffee.CoffeePackage;

import com.eclipsesource.workflow.glsp.server.util.ModelTypes;

public class CreateDecisionNodeHandler extends AbstractCreateNodeHandler {

	public CreateDecisionNodeHandler() {
		super(ModelTypes.DECISION_NODE, CoffeePackage.Literals.DECISION);
	}

	@Override
	public String getLabel() {
		return "Decision Node";
	}

}
