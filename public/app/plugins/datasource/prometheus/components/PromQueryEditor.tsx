import React, { PureComponent } from 'react';

// Types
import { QueryEditorProps } from '@grafana/ui/src/types';
import { PrometheusDatasource } from '../datasource';
import { PromQuery } from '../types';

import PromQueryField from './PromQueryField';

type Props = QueryEditorProps<PrometheusDatasource, PromQuery>;

export class PromQueryEditor extends PureComponent<Props> {
  query: PromQuery;

  constructor(props: Props) {
    super(props);
    this.query = props.query;
  }

  onFieldChange = (query: PromQuery, override?) => {
    this.query.expr = query.expr;
  };

  onRunQuery = () => {
    const { query } = this;
    this.props.onChange(query);
    this.props.onRunQuery();
  };

  render() {
    const { datasource, query } = this.props;

    return (
      <div className="gf-form-input" style={{ height: 'initial' }}>
        <PromQueryField
          datasource={datasource}
          query={query}
          onQueryChange={this.onFieldChange}
          onExecuteQuery={this.onRunQuery}
          history={[]}
        />
      </div>
    );
  }
}
