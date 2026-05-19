"""
Root logger configuration.
"""

import logging

LOG_FORMAT = "%(asctime)s - %(name)s - %(levelname)s - %(message)s"


def setup_logging(level: int = logging.INFO) -> None:
    """
    Configure the root logger with a standard format.
    """

    logging.basicConfig(level=level, format=LOG_FORMAT)
