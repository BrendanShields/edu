Example schema for Copilot usage metrics - GitHub Docs

[Skip to main content](#main-content)

[GitHub Docs](/en)

Version: Free, Pro, & Team

Search or ask Copilot

Search or askCopilot

Select language: current language is English

Search or ask Copilot

Search or askCopilot

Open menu

Open Sidebar

# Example schema for Copilot usage metrics

See an example schema of the data returned by the Copilot usage metrics API.

## Who can use this feature?

Enterprise owners, organization administrators, billing managers, and people with an enterprise custom role with the "View Enterprise Copilot Metrics" permission.

Copy as Markdown

## In this article

The following are example schemas for the user-level and enterprise-level data returned by the Copilot usage metrics endpoints. The actual data returned may vary based on the specific metrics being tracked and the level of aggregation. You can use these examples as a reference for understanding the structure of the data and how to interpret the various fields and metrics included in the API response.

## [User-level schema example](#user-level-schema-example)

JSON

\[{
  "code\_acceptance\_activity\_count": 1,
  "code\_generation\_activity\_count": 1,
  "day": "2025-10-01",
  "enterprise\_id": "1",
  "loc\_added\_sum": 8,
  "loc\_deleted\_sum": 0,
  "loc\_suggested\_to\_add\_sum": 10,
  "loc\_suggested\_to\_delete\_sum": 0,
  "totals\_by\_cli": {
    "last\_known\_cli\_version": {
      "cli\_version": "1.0.8",
      "sampled\_at": "2025-10-01T00:01:43.000Z"
    },
    "prompt\_count": 2,
    "request\_count": 2,
    "session\_count": 2,
    "token\_usage": {
      "avg\_tokens\_per\_request": 4400.0,
      "output\_tokens\_sum": 5000,
      "prompt\_tokens\_sum": 3800
    }
  },
  "totals\_by\_feature": \[{
    "code\_acceptance\_activity\_count": 1,
    "code\_generation\_activity\_count": 1,
    "feature": "code\_completion",
    "loc\_added\_sum": 8,
    "loc\_deleted\_sum": 0,
    "loc\_suggested\_to\_add\_sum": 10,
    "loc\_suggested\_to\_delete\_sum": 0,
    "user\_initiated\_interaction\_count": 0
  }\],
  "totals\_by\_ide": \[{
    "code\_acceptance\_activity\_count": 1,
    "code\_generation\_activity\_count": 1,
    "ide": "vscode",
    "last\_known\_ide\_version": {
      "ide\_version": "1.85.0",
      "sampled\_at": "2025-10-01T00:00:02.000Z"
    },
    "last\_known\_plugin\_version": {
      "plugin": "",
      "plugin\_version": "",
      "sampled\_at": "2025-10-01T00:00:02.000Z"
    },
    "loc\_added\_sum": 8,
    "loc\_deleted\_sum": 0,
    "loc\_suggested\_to\_add\_sum": 10,
    "loc\_suggested\_to\_delete\_sum": 0,
    "user\_initiated\_interaction\_count": 0
  }\],
  "totals\_by\_language\_feature": \[{
    "code\_acceptance\_activity\_count": 1,
    "code\_generation\_activity\_count": 1,
    "feature": "code\_completion",
    "language": "unknown",
    "loc\_added\_sum": 8,
    "loc\_deleted\_sum": 0,
    "loc\_suggested\_to\_add\_sum": 10,
    "loc\_suggested\_to\_delete\_sum": 0
  }\],
  "totals\_by\_language\_model": \[\],
  "totals\_by\_model\_feature": \[\],
  "used\_agent": false,
  "used\_chat": false,
  "used\_cli": true,
  "user\_id": 1,
  "user\_login": "login1",
  "user\_initiated\_interaction\_count": 0,
  "etl\_id": "green",
  "day\_partition": "2025-10-01",
  "entity\_id\_partition": 1
}\]

```json
[{
  "code_acceptance_activity_count": 1,
  "code_generation_activity_count": 1,
  "day": "2025-10-01",
  "enterprise_id": "1",
  "loc_added_sum": 8,
  "loc_deleted_sum": 0,
  "loc_suggested_to_add_sum": 10,
  "loc_suggested_to_delete_sum": 0,
  "totals_by_cli": {
    "last_known_cli_version": {
      "cli_version": "1.0.8",
      "sampled_at": "2025-10-01T00:01:43.000Z"
    },
    "prompt_count": 2,
    "request_count": 2,
    "session_count": 2,
    "token_usage": {
      "avg_tokens_per_request": 4400.0,
      "output_tokens_sum": 5000,
      "prompt_tokens_sum": 3800
    }
  },
  "totals_by_feature": [{
    "code_acceptance_activity_count": 1,
    "code_generation_activity_count": 1,
    "feature": "code_completion",
    "loc_added_sum": 8,
    "loc_deleted_sum": 0,
    "loc_suggested_to_add_sum": 10,
    "loc_suggested_to_delete_sum": 0,
    "user_initiated_interaction_count": 0
  }],
  "totals_by_ide": [{
    "code_acceptance_activity_count": 1,
    "code_generation_activity_count": 1,
    "ide": "vscode",
    "last_known_ide_version": {
      "ide_version": "1.85.0",
      "sampled_at": "2025-10-01T00:00:02.000Z"
    },
    "last_known_plugin_version": {
      "plugin": "",
      "plugin_version": "",
      "sampled_at": "2025-10-01T00:00:02.000Z"
    },
    "loc_added_sum": 8,
    "loc_deleted_sum": 0,
    "loc_suggested_to_add_sum": 10,
    "loc_suggested_to_delete_sum": 0,
    "user_initiated_interaction_count": 0
  }],
  "totals_by_language_feature": [{
    "code_acceptance_activity_count": 1,
    "code_generation_activity_count": 1,
    "feature": "code_completion",
    "language": "unknown",
    "loc_added_sum": 8,
    "loc_deleted_sum": 0,
    "loc_suggested_to_add_sum": 10,
    "loc_suggested_to_delete_sum": 0
  }],
  "totals_by_language_model": [],
  "totals_by_model_feature": [],
  "used_agent": false,
  "used_chat": false,
  "used_cli": true,
  "user_id": 1,
  "user_login": "login1",
  "user_initiated_interaction_count": 0,
  "etl_id": "green",
  "day_partition": "2025-10-01",
  "entity_id_partition": 1
}]
```

## [Enterprise-level schema example](#enterprise-level-schema-example)

JSON

\[ {
  "day\_totals" : \[ {
    "code\_acceptance\_activity\_count" : 2,
    "code\_generation\_activity\_count" : 2,
    "daily\_active\_cli\_users" : 2,
    "daily\_active\_users" : 2,
    "day" : "2025-10-01",
    "enterprise\_id" : "1",
    "loc\_added\_sum" : 30,
    "loc\_deleted\_sum" : 0,
    "loc\_suggested\_to\_add\_sum" : 35,
    "loc\_suggested\_to\_delete\_sum" : 0,
    "monthly\_active\_agent\_users" : 0,
    "monthly\_active\_chat\_users" : 0,
    "monthly\_active\_users" : 2,
    "pull\_requests" : {
      "median\_minutes\_to\_merge" : 2.5,
      "median\_minutes\_to\_merge\_copilot\_authored" : 2.5,
      "total\_applied\_suggestions" : 1,
      "total\_copilot\_applied\_suggestions" : 1,
      "total\_copilot\_suggestions" : 1,
      "total\_created" : 2,
      "total\_created\_by\_copilot" : 1,
      "total\_merged" : 2,
      "total\_merged\_created\_by\_copilot" : 1,
      "total\_reviewed" : 1,
      "total\_reviewed\_by\_copilot" : 1,
      "total\_suggestions" : 1
    },
    "totals\_by\_cli" : {
      "prompt\_count" : 3,
      "request\_count" : 3,
      "session\_count" : 3,
      "token\_usage" : {
        "avg\_tokens\_per\_request" : 4100.0,
        "output\_tokens\_sum" : 7000,
        "prompt\_tokens\_sum" : 5300
      }
    },
    "totals\_by\_feature" : \[ {
      "code\_acceptance\_activity\_count" : 2,
      "code\_generation\_activity\_count" : 2,
      "feature" : "code\_completion",
      "loc\_added\_sum" : 30,
      "loc\_deleted\_sum" : 0,
      "loc\_suggested\_to\_add\_sum" : 35,
      "loc\_suggested\_to\_delete\_sum" : 0,
      "user\_initiated\_interaction\_count" : 0
    } \],
    "totals\_by\_ide" : \[ {
      "code\_acceptance\_activity\_count" : 2,
      "code\_generation\_activity\_count" : 2,
      "ide" : "vscode",
      "loc\_added\_sum" : 30,
      "loc\_deleted\_sum" : 0,
      "loc\_suggested\_to\_add\_sum" : 35,
      "loc\_suggested\_to\_delete\_sum" : 0,
      "user\_initiated\_interaction\_count" : 0
    } \],
    "totals\_by\_language\_feature" : \[ {
      "code\_acceptance\_activity\_count" : 2,
      "code\_generation\_activity\_count" : 2,
      "feature" : "code\_completion",
      "language" : "unknown",
      "loc\_added\_sum" : 30,
      "loc\_deleted\_sum" : 0,
      "loc\_suggested\_to\_add\_sum" : 35,
      "loc\_suggested\_to\_delete\_sum" : 0
    } \],
    "totals\_by\_language\_model" : \[ \],
    "totals\_by\_model\_feature" : \[ \],
    "user\_initiated\_interaction\_count" : 0,
    "weekly\_active\_users" : 2
  } \],
  "enterprise\_id" : "1",
  "report\_end\_day" : "2025-10-01",
  "report\_start\_day" : "2025-09-04",
  "etl\_id" : "green",
  "day\_partition" : "2025-10-01",
  "entity\_id\_partition" : 1
}, {
  "day\_totals" : \[ {
    "code\_acceptance\_activity\_count" : 1,
    "code\_generation\_activity\_count" : 2,
    "daily\_active\_users" : 2,
    "day" : "2025-10-01",
    "enterprise\_id" : "2",
    "loc\_added\_sum" : 38,
    "loc\_deleted\_sum" : 0,
    "loc\_suggested\_to\_add\_sum" : 40,
    "loc\_suggested\_to\_delete\_sum" : 0,
    "monthly\_active\_agent\_users" : 0,
    "monthly\_active\_chat\_users" : 0,
    "monthly\_active\_users" : 2,
    "pull\_requests" : {
      "total\_applied\_suggestions" : 0,
      "total\_copilot\_applied\_suggestions" : 0,
      "total\_copilot\_suggestions" : 0,
      "total\_created" : 1,
      "total\_created\_by\_copilot" : 0,
      "total\_merged" : 0,
      "total\_merged\_created\_by\_copilot" : 0,
      "total\_reviewed" : 1,
      "total\_reviewed\_by\_copilot" : 0,
      "total\_suggestions" : 1
    },
    "totals\_by\_feature" : \[ {
      "code\_acceptance\_activity\_count" : 1,
      "code\_generation\_activity\_count" : 2,
      "feature" : "code\_completion",
      "loc\_added\_sum" : 38,
      "loc\_deleted\_sum" : 0,
      "loc\_suggested\_to\_add\_sum" : 40,
      "loc\_suggested\_to\_delete\_sum" : 0,
      "user\_initiated\_interaction\_count" : 0
    } \],
    "totals\_by\_ide" : \[ {
      "code\_acceptance\_activity\_count" : 1,
      "code\_generation\_activity\_count" : 2,
      "ide" : "vscode",
      "loc\_added\_sum" : 38,
      "loc\_deleted\_sum" : 0,
      "loc\_suggested\_to\_add\_sum" : 40,
      "loc\_suggested\_to\_delete\_sum" : 0,
      "user\_initiated\_interaction\_count" : 0
    } \],
    "totals\_by\_language\_feature" : \[ {
      "code\_acceptance\_activity\_count" : 1,
      "code\_generation\_activity\_count" : 2,
      "feature" : "code\_completion",
      "language" : "unknown",
      "loc\_added\_sum" : 38,
      "loc\_deleted\_sum" : 0,
      "loc\_suggested\_to\_add\_sum" : 40,
      "loc\_suggested\_to\_delete\_sum" : 0
    } \],
    "totals\_by\_language\_model" : \[ \],
    "totals\_by\_model\_feature" : \[ \],
    "user\_initiated\_interaction\_count" : 0,
    "weekly\_active\_users" : 2
  } \],
  "enterprise\_id" : "2",
  "report\_end\_day" : "2025-10-01",
  "report\_start\_day" : "2025-09-04",
  "etl\_id" : "green",
  "day\_partition" : "2025-10-01",
  "entity\_id\_partition" : 2
} \]

```json
[ {
  "day_totals" : [ {
    "code_acceptance_activity_count" : 2,
    "code_generation_activity_count" : 2,
    "daily_active_cli_users" : 2,
    "daily_active_users" : 2,
    "day" : "2025-10-01",
    "enterprise_id" : "1",
    "loc_added_sum" : 30,
    "loc_deleted_sum" : 0,
    "loc_suggested_to_add_sum" : 35,
    "loc_suggested_to_delete_sum" : 0,
    "monthly_active_agent_users" : 0,
    "monthly_active_chat_users" : 0,
    "monthly_active_users" : 2,
    "pull_requests" : {
      "median_minutes_to_merge" : 2.5,
      "median_minutes_to_merge_copilot_authored" : 2.5,
      "total_applied_suggestions" : 1,
      "total_copilot_applied_suggestions" : 1,
      "total_copilot_suggestions" : 1,
      "total_created" : 2,
      "total_created_by_copilot" : 1,
      "total_merged" : 2,
      "total_merged_created_by_copilot" : 1,
      "total_reviewed" : 1,
      "total_reviewed_by_copilot" : 1,
      "total_suggestions" : 1
    },
    "totals_by_cli" : {
      "prompt_count" : 3,
      "request_count" : 3,
      "session_count" : 3,
      "token_usage" : {
        "avg_tokens_per_request" : 4100.0,
        "output_tokens_sum" : 7000,
        "prompt_tokens_sum" : 5300
      }
    },
    "totals_by_feature" : [ {
      "code_acceptance_activity_count" : 2,
      "code_generation_activity_count" : 2,
      "feature" : "code_completion",
      "loc_added_sum" : 30,
      "loc_deleted_sum" : 0,
      "loc_suggested_to_add_sum" : 35,
      "loc_suggested_to_delete_sum" : 0,
      "user_initiated_interaction_count" : 0
    } ],
    "totals_by_ide" : [ {
      "code_acceptance_activity_count" : 2,
      "code_generation_activity_count" : 2,
      "ide" : "vscode",
      "loc_added_sum" : 30,
      "loc_deleted_sum" : 0,
      "loc_suggested_to_add_sum" : 35,
      "loc_suggested_to_delete_sum" : 0,
      "user_initiated_interaction_count" : 0
    } ],
    "totals_by_language_feature" : [ {
      "code_acceptance_activity_count" : 2,
      "code_generation_activity_count" : 2,
      "feature" : "code_completion",
      "language" : "unknown",
      "loc_added_sum" : 30,
      "loc_deleted_sum" : 0,
      "loc_suggested_to_add_sum" : 35,
      "loc_suggested_to_delete_sum" : 0
    } ],
    "totals_by_language_model" : [ ],
    "totals_by_model_feature" : [ ],
    "user_initiated_interaction_count" : 0,
    "weekly_active_users" : 2
  } ],
  "enterprise_id" : "1",
  "report_end_day" : "2025-10-01",
  "report_start_day" : "2025-09-04",
  "etl_id" : "green",
  "day_partition" : "2025-10-01",
  "entity_id_partition" : 1
}, {
  "day_totals" : [ {
    "code_acceptance_activity_count" : 1,
    "code_generation_activity_count" : 2,
    "daily_active_users" : 2,
    "day" : "2025-10-01",
    "enterprise_id" : "2",
    "loc_added_sum" : 38,
    "loc_deleted_sum" : 0,
    "loc_suggested_to_add_sum" : 40,
    "loc_suggested_to_delete_sum" : 0,
    "monthly_active_agent_users" : 0,
    "monthly_active_chat_users" : 0,
    "monthly_active_users" : 2,
    "pull_requests" : {
      "total_applied_suggestions" : 0,
      "total_copilot_applied_suggestions" : 0,
      "total_copilot_suggestions" : 0,
      "total_created" : 1,
      "total_created_by_copilot" : 0,
      "total_merged" : 0,
      "total_merged_created_by_copilot" : 0,
      "total_reviewed" : 1,
      "total_reviewed_by_copilot" : 0,
      "total_suggestions" : 1
    },
    "totals_by_feature" : [ {
      "code_acceptance_activity_count" : 1,
      "code_generation_activity_count" : 2,
      "feature" : "code_completion",
      "loc_added_sum" : 38,
      "loc_deleted_sum" : 0,
      "loc_suggested_to_add_sum" : 40,
      "loc_suggested_to_delete_sum" : 0,
      "user_initiated_interaction_count" : 0
    } ],
    "totals_by_ide" : [ {
      "code_acceptance_activity_count" : 1,
      "code_generation_activity_count" : 2,
      "ide" : "vscode",
      "loc_added_sum" : 38,
      "loc_deleted_sum" : 0,
      "loc_suggested_to_add_sum" : 40,
      "loc_suggested_to_delete_sum" : 0,
      "user_initiated_interaction_count" : 0
    } ],
    "totals_by_language_feature" : [ {
      "code_acceptance_activity_count" : 1,
      "code_generation_activity_count" : 2,
      "feature" : "code_completion",
      "language" : "unknown",
      "loc_added_sum" : 38,
      "loc_deleted_sum" : 0,
      "loc_suggested_to_add_sum" : 40,
      "loc_suggested_to_delete_sum" : 0
    } ],
    "totals_by_language_model" : [ ],
    "totals_by_model_feature" : [ ],
    "user_initiated_interaction_count" : 0,
    "weekly_active_users" : 2
  } ],
  "enterprise_id" : "2",
  "report_end_day" : "2025-10-01",
  "report_start_day" : "2025-09-04",
  "etl_id" : "green",
  "day_partition" : "2025-10-01",
  "entity_id_partition" : 2
} ]
```