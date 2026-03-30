# Implementation: Root AGENTS Workflow Exceptions And Commit Message Output

## Objective

Update the root `AGENTS.md` so:

- agents provide a suggested git commit message after each implementation
- an explicit direct implementation request from the user allows agents to bypass scan and plan phases and proceed straight to implementation

## Current State

- [`AGENTS.md`](/Users/ben/projects/main-site/AGENTS.md) currently requires a strict three-phase workflow with explicit user confirmation between phases.
- The current wording has no exception for direct implementation requests.
- The implementation phase requires validation and outcome summaries, but it does not require a suggested commit message in the final response.

## Target State

- `AGENTS.md` contains a narrow, explicit exception allowing direct implementation when the user clearly requests implementation immediately.
- `AGENTS.md` also requires agents to include a suggested git commit message after each implementation.
- The wording remains documentation-only and does not imply that agents should create commits automatically.

## Files Changed

- `AGENTS.md`
- `docs/impl/agent-commit-message-instruction.md`

## Risks Or Assumptions

- The bypass rule must be carefully worded so it applies only to explicit direct implementation requests, not general approval or ambiguous wording.
- The commit-message instruction must distinguish between suggesting a message and performing a git commit.
- I still cannot inspect git state locally because command line developer tools are missing in this environment.

## Validation Approach

- Update the workflow preamble or phase rules in `AGENTS.md` to define the direct-implementation exception.
- Update the implementation phase section in `AGENTS.md` to require a suggested git commit message after implementation.
- Move the task record from `docs/plan/` to `docs/impl/` when implementation starts.
- Re-read the updated `AGENTS.md` to confirm both instructions are explicit and internally consistent.

## Implementation Notes

- Added a workflow-level exception allowing agents to skip scan and plan when the user explicitly requests direct implementation.
- Updated the implementation phase to clarify that plan approval is not required in that direct-implementation case.
- Added an implementation-phase instruction requiring a suggested git commit message after each implementation summary, without implying automatic commit creation.

## Validation Results

- Re-read the updated `AGENTS.md` to confirm both workflow changes are present and worded as repository policy.
- Git-based validation remains unavailable in this environment because command line developer tools are missing.
